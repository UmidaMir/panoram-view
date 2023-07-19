const popup = document.querySelector('.popup-bg')
const popupOpen = document.querySelectorAll('#open-popup')
const popupClose = document.querySelector('.close-popup')

popupOpen.forEach((p) => {
  p.addEventListener('click', () => popup.classList.add('active'))
})

popupClose.addEventListener('click', () => {
  return popup.classList.remove('active')
})

// 1
const panoImage1 = document.getElementById('modal1-image')
const apartPano = '../images/photo-1.png'

const viewer1 = new PhotoSphereViewer.Viewer({
  container: panoImage1,
  panorama: apartPano,
})

// 2
const panoImage2 = document.getElementById('modal2-image')
const parkPano = '../images/photo-2.png'

const viewer2 = new PhotoSphereViewer.Viewer({
  container: panoImage2,
  panorama: parkPano,
})

// 3
const panoImage3 = document.getElementById('modal3-image')
const roadPano = '../images/photo-3.png'

const viewer3 = new PhotoSphereViewer.Viewer({
  container: panoImage3,
  panorama: roadPano,
})

// 4
const panoImage4 = document.getElementById('modal4-image')
const mansPano = '../images/photo-4.png'

const viewer4 = new PhotoSphereViewer.Viewer({
  container: panoImage4,
  panorama: mansPano,
})

function openModal(modalNum) {
  const modal = document.getElementById('modal' + modalNum)
  modal.style.display = 'block'
}

function closeModal(modalNum) {
  const modal = document.getElementById('modal' + modalNum)
  modal.style.display = 'none'
}
