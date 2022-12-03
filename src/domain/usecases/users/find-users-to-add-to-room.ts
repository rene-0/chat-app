export interface FindUsersToAddToRoom {
  findUsersToAddToRoom: (request: FindUsersToAddToRoom.Request) => Promise<FindUsersToAddToRoom.Response>
}

export namespace FindUsersToAddToRoom {
  export type Request = {
    roomId: number
  }

  type User = {
    idUser: number
    name: string
  }

  export type Response = User[]
}
