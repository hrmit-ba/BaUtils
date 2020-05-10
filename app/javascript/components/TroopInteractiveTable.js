import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class TroopsInteractiveTable extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      troopType: props.troopType
    }
  }

  formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  secondsToHours = (value) => {
    if (!value) return "00:00:00"

    var seconds = value
    var days  = Math.floor(seconds/(3600*24))
    seconds -= days*3600*24
    var hours = Math.floor(seconds / 3600)
    seconds -= hours*3600
    var minutes = Math.floor(seconds / 60)
    seconds -= minutes*60
    days = days == 0 ? "" : days+'d '
    if (hours   < 10) {hours   = "0"+hours}
    if (minutes < 10) {minutes = "0"+minutes}
    if (seconds < 10) {seconds = "0"+seconds}
    return days+hours+':'+minutes+':'+seconds
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="page-header">
            <h1 id="tables">{this.state.troopType}</h1>
          </div>

          <div className="perc-wrapper">
            <label>
              Troop training %:
              <input
                type="text"
                pattern="[0-9]*"
                className="perc-box"
                onChange={(e) => this.props.onMainPercChange(this.state.troopType, e)}
                value={this.props.bind.allPerc}
                />
              {this.state.troopType} training %:
              <input
                type="text"
                pattern="[0-9]*"
                className="perc-box"
                onChange={(e) => this.props.onTroopPercChange(this.state.troopType, e)}
                />
            </label>
          </div>

          <div className="bs-component">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Type</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Power</th>
                  <th scope="col"><div className="icon wood"></div></th>
                  <th scope="col"><div className="icon meat"></div></th>
                  <th scope="col"><div className="icon mana"></div></th>
                  <th scope="col"><div className="icon stone"></div></th>
                  <th scope="col"><div className="icon ivory"></div></th>
                  <th scope="col">Will Take</th>
                </tr>
              </thead>
              <tbody>
                {this.props.bind[this.state.troopType].map((troop,i) => {
                  return (
                    <React.Fragment>
                      <tr className="table-dark" key={troop.kind + troop.tier}>
                        <td scope="col"><div className={"icon troop " + troop.data.details.class_name} title={troop.data.details.name}></div></td>
                        <td scope="col">
                          <input
                            type="text"
                            pattern="[0-9]*"
                            onChange={(e) => this.props.onChange(i, this.state.troopType, e)}
                            />
                        </td>
                        <td scope="col">{this.props.bind.power[this.state.troopType][i]}</td>
                        <td scope="col">{this.formatNumber(troop.data.resources.wood * this.props.bind.amounts[this.state.troopType][i])}</td>
                        <td scope="col">{this.formatNumber(troop.data.resources.meat * this.props.bind.amounts[this.state.troopType][i])}</td>
                        <td scope="col">{this.formatNumber(troop.data.resources.mana * this.props.bind.amounts[this.state.troopType][i])}</td>
                        <td scope="col">{this.formatNumber(troop.data.resources.stone * this.props.bind.amounts[this.state.troopType][i])}</td>
                        <td scope="col">{this.formatNumber(troop.data.resources.ivory * this.props.bind.amounts[this.state.troopType][i])}</td>
                        <td scope="col">{this.props.secondsToHours(this.props.calculateTimePerc(troop.data.details.time,this.state.troopType, i, this.props.state)) }</td>
                      </tr>
                    </React.Fragment>
                  )
                })}

                  <tr className="table-success">
                    <td scope="col">Totals</td>
                    <td scope="col">-</td>
                    <td scope="col">{this.formatNumber(this.props.bind.totals[this.state.troopType].total_power)}</td>
                    <td scope="col">{this.formatNumber(this.props.bind.totals[this.state.troopType].total_rss.wood)}</td>
                    <td scope="col">{this.formatNumber(this.props.bind.totals[this.state.troopType].total_rss.meat)}</td>
                    <td scope="col">{this.formatNumber(this.props.bind.totals[this.state.troopType].total_rss.mana)}</td>
                    <td scope="col">{this.formatNumber(this.props.bind.totals[this.state.troopType].total_rss.stone)}</td>
                    <td scope="col">{this.formatNumber(this.props.bind.totals[this.state.troopType].total_rss.ivory)}</td>
                    <td scope="col">{this.props.secondsToHours(this.props.bind.totals[this.state.troopType].total_time)}</td>
                  </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default TroopsInteractiveTable
