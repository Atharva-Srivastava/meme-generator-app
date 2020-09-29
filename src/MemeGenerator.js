import React,{Component} from 'react'
class MemeGenerator extends Component{
  constructor(){
    super()
    this.state={
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImages: [
     { url:"https://i.imgflip.com/1ur9b0.jpg"},{url:"https://i.imgflip.com/1g8my4.jpg"},{url:"https://i.imgflip.com/24y43o.jpg"},{url:"https://i.imgflip.com/261o3j.jpg"},{url:"https://i.imgflip.com/22bdq6.jpg"},{url:"https://i.imgflip.com/3lmzyx.jpg"},{url:"https://i.imgflip.com/1otk96.jpg"},{url:"https://i.imgflip.com/9ehk.jpg"},
     {url:"https: //i.imgflip.com/1jwhww.jpg"},
     {url:"https://i.imgflip.com/392xtu.jpg"},{url:"https://i.imgflip.com/51s5.jpg"},{url:"https://i.imgflip.com/21uy0f.jpg"},{url:"https://i.imgflip.com/3pnmg.jpg"},{url:"https://i.imgflip.com/1bgw.jpg"},{url:"https://i.imgflip.com/gtj5t.jpg"},{url:"https://i.imgflip.com/2odckz.jpg"},{url:"https://i.imgflip.com/1wz1x.jpg"},{url:"https://i.imgflip.com/271ps6.jpg"}
      ]
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
     
  
  handleChange(event) {
    console.log('working')
    const {name,value} = event.target
    this.setState({[name]: value})
    }
    handleSubmit(event){
      event.preventDefault()
      const rnum= Math.floor(Math.random()* this.state.allMemeImages.length)
      const randimg= this.state.allMemeImages[rnum].url
      this.setState({randomImg: randimg})
    }
    render() {
    return(
     <div>
      <form className="meme-form" onSubmit={this.handleSubmit}>
      <input type='text' name='topText' value={this.state.topText} placeholder='Top-text' onChange={this.handleChange}/>
      <input type='text' name='bottomText' value={this.state.bottomText} placeholder='Bottom-text' onChange={this.handleChange}/>
      <button>Gen</button>
     </form>
     <div className="meme">
      <img src={this.state.randomImg} alt="" />
     <h2 className='top'>{this.state.topText}</h2>
     <h2 className='bottom'>{this.state.bottomText}</h2>
     </div>
     </div>
    )
  }
}

export default MemeGenerator