// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Troops extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      timers: {
        warriors:[0,0,0,0,0],
        riders: [0,0,0,0,0],
        oracles: [0,0,0,0,0],
      },
      amounts: {
        warriors:[0,0,0,0,0],
        riders:[0,0,0,0,0],
        oracles:[0,0,0,0,0],
      },
      totals: {
        warriors: {
          total_time: 0,
          total_rss: {
            wood: 0, meat: 0, mana: 0, stone: 0, ivory: 0
          }
        },
        riders: {
          total_time: 0,
          total_rss: {
            wood: 0, meat: 0, mana: 0, stone: 0, ivory: 0
          }
        },
        oracles: {
          total_time: 0,
          total_rss: {
            wood: 0, meat: 0, mana: 0, stone: 0, ivory: 0
          }
        }
      }
    }

    this.warriors = [
      { class: "warrior-t1" , name: "Warrior"     , wood: 100,  meat: 50,   mana: 0,    stone: 0,    ivory: 0   },
      { class: "warrior-t2" , name: "Protector"   , wood: 125,  meat: 75,   mana: 5,    stone: 100,  ivory: 0   },
      { class: "warrior-t3" , name: "Warmaster"   , wood: 0,    meat: 150,  mana: 10,   stone: 150,  ivory: 120 },
      { class: "warrior-t4" , name: "Berserker"   , wood: 0,    meat: 400,  mana: 70,   stone: 400,  ivory: 300 },
      { class: "warrior-t5" , name: "Marauder"    , wood: 0,    meat: 1000, mana: 500,  stone: 1000, ivory: 800 }
    ]

    this.riders = [
      { class: "rider-t1"   , name: "Wolfrider"   , wood: 50,   meat: 100,  mana: 0,    stone: 0,    ivory: 0   },
      { class: "rider-t2"   , name: "Rhinorider"  , wood: 100,  meat: 200,  mana: 5,    stone: 0,    ivory: 0   },
      { class: "rider-t3"   , name: "Rhinomaster" , wood: 150,  meat: 150,  mana: 10,   stone: 0,    ivory: 120 },
      { class: "rider-t4"   , name: "Dragonrider" , wood: 400,  meat: 400,  mana: 70,   stone: 0,    ivory: 300 },
      { class: "rider-t5"   , name: "Dragonmaster", wood: 1000, meat: 1000, mana: 500,  stone: 0,    ivory: 800 }
    ]

    this.oracles = [
      { class: "shaman-t1"   , name: "Apprentice"  , wood: 75,   meat: 75,   mana: 0,    stone: 0,    ivory: 0 },
      { class: "shaman-t2"   , name: "Spellcrafter", wood: 100,  meat: 100,  mana: 5,    stone: 100,  ivory: 0 },
      { class: "shaman-t3"   , name: "Totemist"    , wood: 150,  meat: 150,  mana: 10,   stone: 150,  ivory: 0 },
      { class: "shaman-t4"   , name: "Oracle"      , wood: 400,  meat: 400,  mana: 70,   stone: 400,  ivory: 0 },
      { class: "shaman-t5"   , name: "Valkyrie"    , wood: 1000, meat: 1000, mana: 500,  stone: 1000, ivory: 0 }
    ]
  }

  secondsToHours = (value) => {
    if (!value) return "00:00:00"

    var seconds = value
    var hours = Math.floor(seconds / 3600)
    seconds -= hours*3600
    var minutes = Math.floor(seconds / 60)
    seconds -= minutes*60

    if (hours   < 10) {hours   = "0"+hours}
    if (minutes < 10) {minutes = "0"+minutes}
    if (seconds < 10) {seconds = "0"+seconds}
    return hours+':'+minutes+':'+seconds
}

  handleChange = (i, type, ev) => {
    var amounts = this.state.amounts
    amounts[type][i] = ev.target.value

    var totals = this.state.totals
    totals[type].total_time = this.getTotalTime(amounts[type], this.state.timers[type])
    totals[type].total_rss = this.getTotalRss(amounts[type], this[type])

    this.setState({
      ...this.state,
        amounts: amounts,
        totals: totals,
    })
  }

  handleTimeChange = (i, type, ev) => {
    var timers = this.state.timers
    timers[type][i] = ev.target.value

    var totals = this.state.totals
    totals[type].total_time = this.getTotalTime(this.state.amounts[type], this.state.timers[type])

    this.setState({
      ...this.state,
        timers: timers,
        totals: totals,
    })
  }

  getTotalTime = (amounts, timers) => {
    var totalTime = 0
    for(var i=0; i<amounts.length ;i++) { totalTime += amounts[i] * timers[i] }
    return totalTime
  }

  getTotalRss = (amounts, groups) => {
    var total = { wood: 0, meat: 0, mana: 0, stone: 0, ivory: 0 }

    amounts.map((amount,i) => {
      Object.keys(total).map((key) => {
        total[key] += amount * groups[i][key]
      })
    })

    return total
  }

  render () {
    return (
      <div className="container">
        <div className="bs-docs-section">

                    <div className="row">
            <div className="col-lg-12">
              <div className="page-header">
                <h1 id="tables" className="title-center">Final Total</h1>
              </div>

              <div className="bs-component">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col"><div className="icon wood"></div></th>
                      <th scope="col"><div className="icon meat"></div></th>
                      <th scope="col"><div className="icon mana"></div></th>
                      <th scope="col"><div className="icon stone"></div></th>
                      <th scope="col"><div className="icon ivory"></div></th>
                      <th scope="col">Will Take</th>
                    </tr>
                  </thead>
                  <tbody>
                     <tr className="table-success">
                        <td scope="col">{
                          this.state.totals.warriors.total_rss.wood +
                          this.state.totals.riders.total_rss.wood +
                          this.state.totals.oracles.total_rss.wood
                        }</td>
                        <td scope="col">{
                          this.state.totals.warriors.total_rss.meat +
                          this.state.totals.riders.total_rss.meat +
                          this.state.totals.oracles.total_rss.meat
                        }</td>
                        <td scope="col">{
                          this.state.totals.warriors.total_rss.mana +
                          this.state.totals.riders.total_rss.mana +
                          this.state.totals.oracles.total_rss.mana
                        }</td>
                        <td scope="col">{
                          this.state.totals.warriors.total_rss.stone +
                          this.state.totals.riders.total_rss.stone +
                          this.state.totals.oracles.total_rss.stone
                        }</td>
                        <td scope="col">{
                          this.state.totals.warriors.total_rss.ivory +
                          this.state.totals.riders.total_rss.ivory +
                          this.state.totals.oracles.total_rss.ivory
                        }</td>
                         <td scope="col">{
                          this.secondsToHours(this.state.totals.warriors.total_time +
                          this.state.totals.riders.total_time +
                          this.state.totals.oracles.total_time)
                        }</td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="page-header">
                <h1 id="tables">Warriors</h1>
              </div>

              <div className="bs-component">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Type</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Time</th>
                      <th scope="col"><div className="icon wood"></div></th>
                      <th scope="col"><div className="icon meat"></div></th>
                      <th scope="col"><div className="icon mana"></div></th>
                      <th scope="col"><div className="icon stone"></div></th>
                      <th scope="col"><div className="icon ivory"></div></th>
                      <th scope="col">Will Take</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.warriors.map((war,i) => {
                      var key = "war_"+i
                      return (
                        <React.Fragment>
                          <tr className="table-dark" key={key}>
                            <td scope="col"><div className={"icon troop " + war.class} title={war.name}></div></td>
                            <td scope="col">
                              <input
                                type="text"
                                pattern="[0-9]*"
                                onChange={(e) => this.handleChange(i, "warriors", e)}
                                />
                            </td>
                            <td scope="col">
                              <input
                                type="text"
                                pattern="[0-9]*"
                                onChange={(e) => this.handleTimeChange(i, "warriors", e)}
                                />
                            </td>
                            <td scope="col">{war.wood * this.state.amounts.warriors[i]}</td>
                            <td scope="col">{war.meat * this.state.amounts.warriors[i]}</td>
                            <td scope="col">{war.mana * this.state.amounts.warriors[i]}</td>
                            <td scope="col">{war.stone * this.state.amounts.warriors[i]}</td>
                            <td scope="col">{war.ivory * this.state.amounts.warriors[i]}</td>
                            <td scope="col">{this.secondsToHours(this.state.timers.warriors[i] * this.state.amounts.warriors[i])}</td>
                          </tr>
                        </React.Fragment>
                      )
                    })}

                      <tr className="table-success">
                        <td scope="col">Totals</td>
                        <td scope="col">-</td>
                        <td scope="col">-</td>
                        <td scope="col">{this.state.totals.warriors.total_rss.wood}</td>
                        <td scope="col">{this.state.totals.warriors.total_rss.meat}</td>
                        <td scope="col">{this.state.totals.warriors.total_rss.mana}</td>
                        <td scope="col">{this.state.totals.warriors.total_rss.stone}</td>
                        <td scope="col">{this.state.totals.warriors.total_rss.ivory}</td>
                        <td scope="col">{this.secondsToHours(this.state.totals.warriors.total_time)}</td>
                      </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="page-header">
                <h1 id="tables">Beastmaster</h1>
              </div>

              <div className="bs-component">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Type</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Time</th>
                      <th scope="col"><div className="icon wood"></div></th>
                      <th scope="col"><div className="icon meat"></div></th>
                      <th scope="col"><div className="icon mana"></div></th>
                      <th scope="col"><div className="icon stone"></div></th>
                      <th scope="col"><div className="icon ivory"></div></th>
                      <th scope="col">Will Take</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.riders.map((rider,i) => {
                      return (
                        <React.Fragment>
                          <tr className="table-dark">
                            <td scope="col"><div className={"icon troop " + rider.class} title={rider.name}></div></td>
                            <td scope="col">
                              <input
                                type="text"
                                pattern="[0-9]*"
                                onChange={(e) => this.handleChange(i, "riders", e)}
                                />
                            </td>
                            <td scope="col">
                              <input
                                type="text"
                                pattern="[0-9]*"
                                onChange={(e) => this.handleTimeChange(i, "riders", e)}
                                />
                            </td>
                            <td scope="col">{rider.wood * this.state.amounts.riders[i]}</td>
                            <td scope="col">{rider.meat * this.state.amounts.riders[i]}</td>
                            <td scope="col">{rider.mana * this.state.amounts.riders[i]}</td>
                            <td scope="col">{rider.stone * this.state.amounts.riders[i]}</td>
                            <td scope="col">{rider.ivory * this.state.amounts.riders[i]}</td>
                            <td scope="col">{this.secondsToHours(this.state.timers.riders[i] * this.state.amounts.riders[i])}</td>
                          </tr>
                        </React.Fragment>
                      )

                    })}

                       <tr className="table-success">
                        <td scope="col">Totals</td>
                        <td scope="col">-</td>
                        <td scope="col">-</td>
                        <td scope="col">{this.state.totals.riders.total_rss.wood}</td>
                        <td scope="col">{this.state.totals.riders.total_rss.meat}</td>
                        <td scope="col">{this.state.totals.riders.total_rss.mana}</td>
                        <td scope="col">{this.state.totals.riders.total_rss.stone}</td>
                        <td scope="col">{this.state.totals.riders.total_rss.ivory}</td>
                        <td scope="col">{this.secondsToHours(this.state.totals.riders.total_time)}</td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="page-header">
                <h1 id="tables">Shaman</h1>
              </div>

              <div className="bs-component">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Type</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Time</th>
                      <th scope="col"><div className="icon wood"></div></th>
                      <th scope="col"><div className="icon meat"></div></th>
                      <th scope="col"><div className="icon mana"></div></th>
                      <th scope="col"><div className="icon stone"></div></th>
                      <th scope="col"><div className="icon ivory"></div></th>
                      <th scope="col">Will Take</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.oracles.map((shaman,i) => {
                      return (
                        <React.Fragment>
                          <tr className="table-dark">
                            <td scope="col"><div className={"icon troop " + shaman.class} title={shaman.name}></div></td>
                            <td scope="col">
                              <input
                                type="text"
                                pattern="[0-9]*"
                                onChange={(e) => this.handleChange(i, "oracles", e)}
                                />
                            </td>
                            <td scope="col">
                              <input
                                type="text"
                                pattern="[0-9]*"
                                onChange={(e) => this.handleTimeChange(i, "oracles", e)}
                                />
                            </td>
                            <td scope="col">{shaman.wood * this.state.amounts.oracles[i]}</td>
                            <td scope="col">{shaman.meat * this.state.amounts.oracles[i]}</td>
                            <td scope="col">{shaman.mana * this.state.amounts.oracles[i]}</td>
                            <td scope="col">{shaman.stone * this.state.amounts.oracles[i]}</td>
                            <td scope="col">{shaman.ivory * this.state.amounts.oracles[i]}</td>
                            <td scope="col">{this.secondsToHours(this.state.timers.oracles[i] * this.state.amounts.oracles[i])}</td>
                          </tr>
                        </React.Fragment>
                      )

                    })}
                     <tr className="table-success">
                        <td scope="col">Totals</td>
                        <td scope="col">-</td>
                        <td scope="col">-</td>
                        <td scope="col">{this.state.totals.oracles.total_rss.wood}</td>
                        <td scope="col">{this.state.totals.oracles.total_rss.meat}</td>
                        <td scope="col">{this.state.totals.oracles.total_rss.mana}</td>
                        <td scope="col">{this.state.totals.oracles.total_rss.stone}</td>
                        <td scope="col">{this.state.totals.oracles.total_rss.ivory}</td>
                        <td scope="col">{this.secondsToHours(this.state.totals.oracles.total_time)}</td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }

}

export default Troops

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Troops  />,
    document.body.appendChild(document.createElement('div')),
  )
})
