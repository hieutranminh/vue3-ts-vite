export interface IEmployeeList {
  code: string
  job_position: string
  nickname: string
  department: string
  role: string
  skill: string[]
  project: string[]
  status: number
  onboard_at: Date | string
  created_at: Date | string
  updated_at: Date | string
}

export interface IEmployeeSearch {
  code: string
  nickname: string
  job_position: string
  assigned_project: string
  skill: string
  onboard_at: Date | string
}

export interface IEmployeeForm {
  code: string
  nickname: string
  role: string
}
