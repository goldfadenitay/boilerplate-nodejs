import { useState } from 'react'
import { useSearchUsers, useCreateUser } from './hooks/useUsers'

function App() {
  // Search form state
  const [searchRole, setSearchRole] = useState('')
  const [searchStatus, setSearchStatus] = useState('')
  const { data: searchResults, isLoading: isSearching } = useSearchUsers(
    searchRole,
    searchStatus
  )

  // Create form state
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: '',
  })
  const createUser = useCreateUser()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    searchResults?.refetch()
  }

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await createUser.mutateAsync(newUser)
      setNewUser({ name: '', email: '', role: '' })
    } catch (error) {
      console.error('Failed to create user:', error)
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Search Form */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Search Users</h2>
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <input
                value={searchRole}
                onChange={e => setSearchRole(e.target.value)}
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                value={searchStatus}
                onChange={e => setSearchStatus(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              >
                <option value="">All</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              disabled={isSearching}
            >
              {isSearching ? 'Searching...' : 'Search'}
            </button>
          </form>

          {/* Search Results */}
          {searchResults?.users && (
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Results:</h3>
              <div className="space-y-2">
                {searchResults.users.map(user => (
                  <div key={user.id} className="border p-4 rounded">
                    <div className="flex items-center gap-4">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                        <p className="text-sm text-gray-500">
                          {user.role} - {user.status}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Create Form */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Create User</h2>
          <form onSubmit={handleCreate} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                value={newUser.name}
                onChange={e => setNewUser({ ...newUser, name: e.target.value })}
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                value={newUser.email}
                onChange={e =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
                type="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <input
                value={newUser.role}
                onChange={e => setNewUser({ ...newUser, role: e.target.value })}
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              disabled={createUser.isPending}
            >
              {createUser.isPending ? 'Creating...' : 'Create User'}
            </button>
          </form>

          {/* Create Result */}
          {createUser.data?.user && (
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Created User:</h3>
              <div className="border p-4 rounded">
                <div className="flex items-center gap-4">
                  <img
                    src={createUser.data.user.avatar}
                    alt={createUser.data.user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{createUser.data.user.name}</p>
                    <p className="text-sm text-gray-500">
                      {createUser.data.user.email}
                    </p>
                    <p className="text-sm text-gray-500">
                      {createUser.data.user.role} -{' '}
                      {createUser.data.user.status}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default App
