import React from 'react'

const heartStyle = {
    color: '#e25555',
  };
  
  const Footer = () => {
  
    return (
      <div className = "footer">
        <div>
        <footer>
          <p>Made with <span style={heartStyle}>&#9829;</span> by Sunitee <br></br><a href='https://github.com/S3umish/ClassicCars'>Github</a></p>
        </footer>

        </div>
      </div>  
    )
  }
  
  export default Footer;