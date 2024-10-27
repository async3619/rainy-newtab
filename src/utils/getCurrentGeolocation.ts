export interface LatLng {
  lat: number
  lng: number
}

function getCurrentGeolocation() {
  return new Promise<LatLng>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      },
      (error) => {
        reject(error)
      },
      { enableHighAccuracy: true },
    )
  })
}

export default getCurrentGeolocation
