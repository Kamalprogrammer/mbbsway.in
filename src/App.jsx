import Button from "./components/Button"
import SocialMediaLink from "./components/SocialMediaLink"
import NavLinks from "./components/NavLinks"
import ContactAddress from "./components/ContactAddress"
import MainNavbar from "./components/MainNavbar"

import StateBihar from "./components/StateBihar"
import BorderButton from "./components/BorderButton"
import SelectState from "./components/SelectState"
function App() {


  return (
    <>
      <h1>MMBS Way </h1>
      <Button/>
      <SocialMediaLink/>
      <NavLinks/>
      <ContactAddress/>
      <MainNavbar/>
      {/* <StateCard/>  */}

      <StateBihar/>
      <BorderButton text={"Explore More"}/>
      <SelectState />
    </>
  )
}

export default App
