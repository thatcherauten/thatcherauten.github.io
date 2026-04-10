<template>
  <div class="max-w-3xl mx-auto py-8 px-4">
    <h1 class="text-4xl font-bold mb-6">Welcome to My Site</h1>

    <PrimePanel header="About This Site" class="my-6">
      <p class="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        <strong>This is an important point</strong> that deserves attention. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <p class="mb-4">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Curabitur pretium tincidunt lacus. Nulla gravida orci a odio, et tempus feugiat.
        <em>This part is especially interesting</em> and worth noting carefully. Nullam varius turpis vitae lorem congue,
        sit amet fermentum nulla tincidunt.
      </p>
      <p class="mb-4">
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
        Donec eu libero sit amet quam egestas semper. <strong>Key takeaway here</strong> — aenean ultricies mi vitae est.
        Mauris placerat eleifend leo, at rhoncus lorem faucibus vel.
      </p>
      <p class="mb-4">
        Fusce fermentum. Nullam varius nulla in augue laoreet, vitae consectetur nunc tincidunt.
        Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
        Phasellus ultrices nulla quis nibh. <em>Remember this detail</em> as it comes up again later.
        Quisque a lectus, donec consectetuer ligula vulputate sem tristique cursus.
      </p>
    </PrimePanel>

    <PrimePanel header="Navigate" class="my-6">
      <div class="flex gap-4">
        <NuxtLink to="/about">
          <PrimeButton label="About Me" icon="pi pi-user" />
        </NuxtLink>
        <NuxtLink to="/resume">
          <PrimeButton label="Resume" icon="pi pi-file" />
        </NuxtLink>
      </div>
    </PrimePanel>

    <PrimePanel header="Tic-Tac-Toe" class="my-6">
      <div class="flex flex-col items-center gap-4">
        <p class="text-lg font-semibold">{{ statusMessage }}</p>
        <div class="grid grid-cols-3 gap-2">
          <button
            v-for="(cell, index) in board"
            :key="index"
            @click="makeMove(index)"
            class="w-20 h-20 text-3xl font-bold border-2 border-gray-400 rounded hover:bg-gray-100"
          >
            {{ cell }}
          </button>
        </div>
        <PrimeButton label="Reset Game" icon="pi pi-refresh" @click="resetGame" />
      </div>
    </PrimePanel>
  </div>
</template>

<script setup>
const board = ref(Array(9).fill(''))
const currentPlayer = ref('X')
const gameOver = ref(false)

const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6]             // diagonals
]

const checkWinner = () => {
  for (const combo of winningCombos) {
    const [a, b, c] = combo
    if (board.value[a] && board.value[a] === board.value[b] && board.value[a] === board.value[c]) {
      return board.value[a]
    }
  }
  return board.value.every(cell => cell !== '') ? 'Draw' : null
}

const statusMessage = computed(() => {
  const winner = checkWinner()
  if (winner === 'Draw') return "It's a draw!"
  if (winner) return `Player ${winner} wins!`
  return `Player ${currentPlayer.value}'s turn`
})

const makeMove = (index) => {
  if (board.value[index] || gameOver.value) return
  board.value[index] = currentPlayer.value
  if (checkWinner()) {
    gameOver.value = true
    return
  }
  currentPlayer.value = currentPlayer.value === 'X' ? 'O' : 'X'
}

const resetGame = () => {
  board.value = Array(9).fill('')
  currentPlayer.value = 'X'
  gameOver.value = false
}
</script>