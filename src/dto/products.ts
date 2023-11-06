// get many
export interface ProductsPropsResponse {
  meta: {
    code: number
    status: string
    message: string
  }
  data: {
    current_page: number
    data: dataProducts[]
    first_page_url: string
    from: 1
    last_page: number
    last_page_url: String
    links: linkProps[]
    next_page_url: any
    path: String
    per_page: number
    prev_page_url: any
    to: number
    total: number
  }
}

//
export type dataProducts = {
  id: number
  name: String
  subtitle: String
  description: String
  thumbnails: String
  is_figma: number | boolean
  is_sketch: number | boolean
  features: String
  users_id: number
  categories_id: number
  file: String
  deleted_at: any
  created_at: any
  updated_at: any
  category: {
    id: number
    name: string
    thumbnails: string
    deleted_at: null
    created_at: any
    updated_at: any
  }
  galleries: galeryProps[]
}

type galeryProps = {
  id: number
  products_id: number
  url: string
  deleted_at: any
  created_at: any
  updated_at: any
}

type linkProps = {
  url: string
  label: string
  active: boolean
}
