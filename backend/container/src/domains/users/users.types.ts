export interface User {
	id: string
	name: string
	email: string
	role: string
	status: 'active' | 'inactive'
	avatar: string
	lastLogin: Date
	department: string
}
