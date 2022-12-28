'use strict'

const labelImage = document.querySelector('img')
const labelName = document.querySelector('.name')
const labelFollowers = document.querySelector('.followers')
const labelFollowings = document.querySelector('.followings')
const labelRepo = document.querySelector('.repo')

const userInput = document.querySelector('#name')
const searchBtn = document.querySelector('button')

const getUserInfo = async name => {
  const res = await fetch(`https://api.github.com/users/${name}`)
  const data = await res.json()
  console.log(data)
  labelImage.src = data.avatar_url
  labelName.textContent = data.login
  labelFollowers.textContent = data.followers
  labelFollowings.textContent = data.following
  labelRepo.textContent = data.public_repos
}

searchBtn.addEventListener('click', function () {
  const userName = userInput.value
  getUserInfo(userName)
})
