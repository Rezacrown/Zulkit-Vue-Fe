// get many
export interface CategoriesPropsResponse {
  meta: {
    code: number
    status: string
    message: string
  }
  data: {
    current_page: number
    data: dataCategoriesProps[]
    first_page_url: string
    from: 1
    last_page: number
    last_page_url: String
    links: linkItemProps[]
    next_page_url: any
    path: String
    per_page: number
    prev_page_url: any
    to: number
    total: number
  }
}

//
type dataCategoriesProps = {
  id: number
  name: string
  thumbnails: string
  deleted_at: null
  created_at: string
  updated_at: string
  products_count: 2
}

//
type linkItemProps = {
  url: String
  label: String
  active: boolean
}

// get one
export interface CategoryPropsResponse {
  meta: {
    code: number
    status: string
    message: string
  }
  data: {
    id: number
    name: String
    thumbnails: String
    deleted_at: any
    created_at: any
    updated_at: any
    products: productsProps[]
  }
}
//
type productsProps = {
  id: number
  name: String
  subtitle: String
  description: String
  thumbnails: String
  is_figma: number | boolean
  is_sketch: number | boolean
  features: String
  users_id: number
  categories_id: 1
  file: String
  deleted_at: any
  created_at: any
  updated_at: any
}
