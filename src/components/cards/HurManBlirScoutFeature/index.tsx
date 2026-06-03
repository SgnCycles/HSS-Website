import HurManBlirScoutSteps from "../HurManBlirScoutSteps"

const HurManBlirScoutFeature = () => {
  return(
    <div className="full-bleed bg-primary">
      <div className="container">
        <div>
          <h2 className="heading-2 text-white">Hur man blir scout?</h2>
        </div>
        <p className="paragraph-light text-white">Det är enkelt att komma igång! Fyra steg och du är en del av vår kårfamilj.</p>
      </div>
      <HurManBlirScoutSteps />
    </div>
  )
}

export default HurManBlirScoutFeature