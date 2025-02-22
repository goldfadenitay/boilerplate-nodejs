<script setup lang="ts">
import { ref } from 'vue'
import { useSearchUsers, useCreateUser } from './composables/useUsers'

// Search form
const searchRole = ref('')
const searchStatus = ref('')
const {
  data: searchResults,
  isLoading: isSearching,
  refetch: searchUsers,
} = useSearchUsers(searchRole.value, searchStatus.value)

// Create form
const newUser = ref({
  name: '',
  email: '',
  role: '',
})
const createUser = useCreateUser()

const handleSearch = () => {
  searchUsers() // TODO: Fix this
}

const handleCreate = async () => {
  try {
    await createUser.mutateAsync(newUser.value)
    newUser.value = { name: '', email: '', role: '' }
  } catch (error) {
    console.error('Failed to create user:', error)
  }
}
</script>

<template>
  <main class="min-h-screen bg-gray-100 py-12 px-4">
    <div class="max-w-4xl mx-auto space-y-8">
      <!-- Search Form -->
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-2xl font-bold mb-4">Search Users</h2>
        <form @submit.prevent="handleSearch" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Role</label>
            <input
              v-model="searchRole"
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          {{ searchRole }}
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Status</label
            >
            <select
              v-model="searchStatus"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            >
              <option value="">All</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <button
            type="submit"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            :disabled="isSearching"
          >
            {{ isSearching ? 'Searching...' : 'Search' }}
          </button>
        </form>

        <!-- Search Results -->
        <div v-if="searchResults?.users" class="mt-6">
          <h3 class="text-lg font-medium mb-2">Results:</h3>
          <div class="space-y-2">
            <div
              v-for="user in searchResults.users"
              :key="user.id"
              class="border p-4 rounded"
            >
              <div class="flex items-center gap-4">
                <img :src="user.avatar" class="w-10 h-10 rounded-full" />
                <div>
                  <p class="font-medium">{{ user.name }}</p>
                  <p class="text-sm text-gray-500">{{ user.email }}</p>
                  <p class="text-sm text-gray-500">
                    {{ user.role }} - {{ user.status }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Create Form -->
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-2xl font-bold mb-4">Create User</h2>
        <form @submit.prevent="handleCreate" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Name</label>
            <input
              v-model="newUser.name"
              type="text"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input
              v-model="newUser.email"
              type="email"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Role</label>
            <input
              v-model="newUser.role"
              type="text"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <button
            type="submit"
            class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            :disabled="createUser.isPending"
          >
            {{ createUser.isPending ? 'Creating...' : 'Create User' }}
          </button>
        </form>

        <!-- Create Result -->
        <div v-if="createUser.data?.user" class="mt-6">
          <h3 class="text-lg font-medium mb-2">Created User:</h3>
          <div class="border p-4 rounded">
            <div class="flex items-center gap-4">
              <img
                :src="createUser.data.user.avatar"
                class="w-10 h-10 rounded-full"
              />
              <div>
                <p class="font-medium">{{ createUser.data.user.name }}</p>
                <p class="text-sm text-gray-500">
                  {{ createUser.data.user.email }}
                </p>
                <p class="text-sm text-gray-500">
                  {{ createUser.data.user.role }} -
                  {{ createUser.data.user.status }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
