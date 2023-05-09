interface Maybe<A> {
  value: A | null
  bind<B>(
    this: Maybe<A>,
    transform: (value: A) => Promise<Maybe<B>>
  ): Promise<Maybe<B>>
}

function createMaybe<A>(value: A | null): Maybe<A> {
  return {
    value,
    async bind<B>(
      this: Maybe<A>,
      transform: (value: A) => Promise<Maybe<B>>
    ): Promise<Maybe<B>> {
      if (this.value === null) {
        return createMaybe<B>(null)
      }
      return transform(this.value)
    },
  }
}

type User = { id: number; name: string; organizationId: number }
type Organization = { id: number; name: string }

function getUser(userId: number): Promise<Maybe<User>> {
  const users: Record<number, User> = {
    1: { id: 1, name: 'Alice', organizationId: 100 },
    2: { id: 2, name: 'Bob', organizationId: 200 },
  }

  return Promise.resolve(createMaybe(users[userId]))
}

function getOrganization(organizationId: number): Promise<Maybe<Organization>> {
  const organizations: Record<number, Organization> = {
    100: { id: 100, name: 'Acme Corp' },
    200: { id: 200, name: 'Globex Inc' },
  }

  return Promise.resolve(createMaybe(organizations[organizationId]))
}

async function getUserAndOrganization(userId: number): Promise<void> {
  const userMaybe = await getUser(userId)
  const organizationMaybe = await userMaybe.bind((user) =>
    getOrganization(user.organizationId)
  )

  if (organizationMaybe.value !== null) {
    console.log(
      `User: ${userMaybe.value?.name}, Organization: ${organizationMaybe.value.name}`
    )
  } else {
    console.log('User or organization not found')
  }
}

getUserAndOrganization(1) // "User: Alice, Organization: Acme Corp"
getUserAndOrganization(3) // "User or organization not found"
