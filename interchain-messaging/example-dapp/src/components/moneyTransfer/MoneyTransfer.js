import React, { Component } from 'react'
import MainnetTransactionsContainer from './transactions/MainnetTransactions'
import SKALEChainTransactionsContainer from './transactions/SKALEChainTransactions'

import './styles.scss';

class MoneyTransfer extends Component {
  constructor(props) {
    super(props)
    this.handleChangeExit = this.handleChangeExit.bind(this);
    this.handleChangeDeposit = this.handleChangeDeposit.bind(this);
    this.handleChangeAccount = this.handleChangeAccount.bind(this);
    this.handleChangeEndpoint = this.handleChangeEndpoint.bind(this);
    this.handleChangeEndpointSkale = this.handleChangeEndpointSkale.bind(this);
    this.handleChangePrivateKey = this.handleChangePrivateKey.bind(this);
    this.handleChangeSkaleId = this.handleChangeSkaleId.bind(this);
    this.state = {
      exitValue: '',
      depositValue: ''
    };
  }

  componentDidMount(){
    setTimeout(function() {
      this.props.onRefreshBalances();
    }.bind(this), 2000);
  }

  handleChangeExit(event) {
    this.setState({exitValue: event.target.value});
  }

  handleChangeDeposit(event) {
    this.setState({depositValue: event.target.value});
  }

  handleChangeAccount(event) {
    this.props.onUpdateAccount(event.target.value);
  }

  handleChangeEndpoint(event) {
    this.props.onUpdateEndpoint(event.target.value);
  }

  handleChangeEndpointSkale(event) {
    this.props.onUpdateEndpointSkale(event.target.value);
  }

  handleChangePrivateKey(event) {
    this.props.onUpdatePrivateKey(event.target.value);
  }

  handleChangeSkaleId(event) {
    this.props.onUpdateSkaleId(event.target.value);
  }

  render() {
    const {depositBoxBalance, tokenManagerBalance, lockDataSchainBalance, lockDataMainnetBalance, mainnetBalance, schainBalance, transactionDataSchain, transactionDataMainnet, account, endpoint, endpointSkale, privateKey, skaleId} = this.props;
    const {exitValue, depositValue} = this.state;
    return(
      <div className="money-transfer h-100 pb-5">
        <div className="transfer">
          <div className="row justify-content-around">
            <div className="col-sm-5">
              <h4 className="text-center pt-2">Mainnet</h4>
              <form id="transferFunds" className="payment-form px-4 py-2 rounded">
                <div className="row">
                <div className="col-md-3 pr-1">
                  <small className="form-text text-right text-truncate"><span className="yellow">ETH:</span></small>
                </div>
                <div className="col-md-9 pl-0">
                  <small className="form-text text-truncate">{mainnetBalance}</small>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 pr-1">
                  <small className="form-text text-right text-truncate"><span className="yellow">Endpoint:</span></small>
                </div>
                <div className="col-md-9 pl-0">
                  <small className="form-text text-right text-truncate"><input
                  id="endpoint"
                  type="text"
                  autoComplete="off"
                  className=""
                  placeholder="Enter your Endpoint..."
                  value={endpoint}
                  onChange={(event) => this.handleChangeEndpoint(event)}
                /></small>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 pr-1">
                  <small className="form-text text-right text-truncate"><span className="yellow">Account:</span></small>
                </div>
                <div className="col-md-9 pl-0">
                  <small className="form-text text-right text-truncate"><input
                  id="account"
                  type="text"
                  autoComplete="off"
                  className=""
                  placeholder="Enter your Account..."
                  value={account}
                  onChange={(event) => this.handleChangeAccount(event)}
                /></small>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 pr-1">
                  <small className="form-text text-right text-truncate"><span className="yellow">Private Key:</span></small>
                </div>
                <div className="col-md-9 pl-0">
                  <small className="form-text text-right text-truncate"><input
                  id="password"
                  type="password"
                  autoComplete="off"
                  className="text-truncate"
                  placeholder="Enter your Private Key..."
                  value={privateKey}
                  onChange={(event) => this.handleChangePrivateKey(event)}
                /></small>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 pr-1">
                &nbsp;
                </div>
                <div className="col-md-9 pl-0">
                &nbsp;
                </div>
              </div>

                <div className="col-12 mt-3 pt-4">
                  <div className="form-group pt-4">
                    <input type="number" className="form-control center-both w-50" id="deposit-amount" placeholder="Deposit Amount?" value={this.state.depositValue} onChange={this.handleChangeDeposit}/>
                  </div>
                </div>
                <div className="text-center">
                  <button onClick={(event) => this.props.onDeposit(event, depositValue)} className="btn btn-primary mb-3 mx-auto">Deposit</button> 
                  <button onClick={(event) => this.props.onGetMyEth(event, depositValue)} className="btn btn-primary ml-5 mb-3">Get ETH</button>
                </div>
              </form> 
              <div className="row justify-content-center">
                <div className="col-6">
                  <h4 className="text-center pt-2">Lock & Data</h4>
                  <div className="payment-form px-4 py-2 rounded">
                    <small id="lockDataTotal" className="form-text text-white center">
                      <span className="yellow">Total:</span> {lockDataMainnetBalance}
                    </small>
                  </div>
                </div>
              </div>
              <div className="pt-5 pb-5">
                <MainnetTransactionsContainer transactionData={transactionDataMainnet}/>
              </div>
            </div>
            <div className="col-sm-2">
            </div>
            <div className="col-sm-5">
              <h4 className="text-center pt-2">SKALE Chain</h4>
              <form id="transferFundsSChain" className="payment-form px-4 py-2 rounded">
              <div className="row">
                <div className="col-md-3 pr-1">
                  <small className="form-text text-right"><span className="yellow">Cloned ETH:</span></small>
                </div>
                <div className="col-md-9 pl-0">
                  <small className="form-text">{schainBalance}</small>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 pr-1">
                  <small className="form-text text-right text-truncate"><span className="yellow">Endpoint:</span></small>
                </div>
                <div className="col-md-9 pl-0">
                  <small className="form-text text-right text-truncate"><input
                  id="endpointSchain"
                  type="text"
                  autoComplete="off"
                  className=""
                  placeholder="Enter your Endpoint..."
                  value={endpointSkale}
                  onChange={(event) => this.handleChangeEndpointSkale(event)}
                /></small>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 pr-1">
                  <small className="form-text text-right text-truncate"><span className="yellow">Account:</span></small>
                </div>
                <div className="col-md-9 pl-0">
                  <small className="form-text text-right text-truncate"><input
                  id="accountSchain"
                  type="text"
                  autoComplete="off"
                  className=""
                  placeholder="Enter your Account..."
                  value={account}
                  onChange={(event) => this.handleChangeAccount(event)}
                /></small>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 pr-1">
                  <small className="form-text text-right text-truncate"><span className="yellow">Private Key:</span></small>
                </div>
                <div className="col-md-9 pl-0">
                  <small className="form-text text-right text-truncate"><input
                  id="privateKeySchain"
                  type="password"
                  autoComplete="off"
                  className="text-truncate"
                  placeholder="Enter your Private Key..."
                  value={privateKey}
                  onChange={(event) => this.handleChangePrivateKey(event)}
                /></small>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 pr-1">
                  <small className="form-text text-right text-truncate"><span className="yellow">Chain ID:</span></small>
                </div>
                <div className="col-md-9 pl-0">
                  <small className="form-text text-right text-truncate"><input
                  id="schainId"
                  type="text"
                  autoComplete="off"
                  className="text-truncate"
                  placeholder="Enter your SKALE Chain ID..."
                  value={skaleId}
                  onChange={(event) => this.handleChangeSkaleId(event)}
                /></small>
                </div>
              </div>

                <div className="col-12 mt-3 pt-4">
                  <div className="form-group pt-4">
                    <input type="number" className="form-control center-both w-50" id="amount"placeholder="Exit Amount?"  value={this.state.exitValue} onChange={this.handleChangeExit}/>
                  </div>
                </div>

                <div className="text-center">
                  <button onClick={(event) => this.props.onExit(event, exitValue)} className="btn btn-primary mb-3 mx-auto">Exit</button>
                </div>
              </form>
              <div className="row justify-content-center">
                <div className="col-6">
                  <h4 className="text-center pt-2">Lock & Data</h4>
                  <div className="payment-form px-4 py-2 rounded">
                    <small id="lockDataTotal" className="form-text text-white center">
                      <span className="yellow">Total:</span> {lockDataSchainBalance}
                    </small>
                  </div>
                </div>
              </div>
              <div className="pt-5 pb-5">
                <SKALEChainTransactionsContainer transactionData={transactionDataSchain}/>
              </div>
            </div>  
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyTransfer
