export interface LoginResponse {
  data: {
    access_token: String
    token_type: 'Bearer' | String
    user: {
      id: number
      name: String
      email: string
      roles: string
      email_verified_at: Date
      current_team_id: any
      profile_photo_path: any
      created_at: Date
      updated_at: Date
      title: String
      profile_photo_url: string
    }
  }
}

export interface UserInfoResponse {
  data: {
    id: number
    name: string
    email: string
    roles: string
    email_verified_at: any
    current_team_id: any
    profile_photo_path: any
    created_at: Date
    updated_at: Date
    title: string
    profile_photo_url: string
    subscription: []
  }
}

export interface RegisterResponse {
  access_token: String
  token_type: 'Bearer' | String
  user: {
    id: number
    name: String
    email: string
    roles: string
    email_verified_at: Date
    current_team_id: any
    profile_photo_path: any
    created_at: Date
    updated_at: Date
    title: String
    profile_photo_url: string
  }
}
