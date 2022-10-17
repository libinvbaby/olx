import React,{useEffect,useContext,useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import Heart from '../../assets/Heart';
import './Post.css';
import {FirebaseContext} from '../../store/Context'
import { PostContext } from '../../store/PostContext';
import {useHistory} from 'react-router-dom'

function Posts() {
  const{firebase}= useContext(FirebaseContext)
  const [products,setProducts] = useState([])
  const {setPostDetails} = useContext(PostContext)
  
  const history = useHistory()
  useEffect(()=>{
    firebase.firestore().collection('products').get().then((snapshot)=>{
      const allPosts = snapshot.docs.map((product)=>{
        return{
          ...product.data(),
          id:product.id
        }
      })
        setProducts(allPosts)
    })
  },[])
  return (
    <Container>
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <h3>Quick Menu</h3>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.map(product =>{
            return  <div
             className="card" 
             onClick={()=>{
              setPostDetails(product);
              history.push('/view')
             }
            }
             
           >
             <div className="favorite">
               <Heart ></Heart>
             </div>
             <div className="image">
               <img src={product.url} alt="" />
             </div>
             <div className="content">
               <p className="rate">&#x20B9; {product.price}</p>
               <span className="kilometer">{product.category}</span>
               <p className="name"> {product.name}</p>
             </div>
             <div className="date">
               <span>{product.createdAt}</span>
             </div>
           </div>
          })
           }
        </div>
      </div>
      <div className="recommendations">
        <h1>Fresh recommendations</h1>
        </div>

      {
        <Container>
        <Row>
        <Col  xs={12}>
        <div className="heading">
        </div>
        <div className="cards">
       { products.map((product) =>{
        return         <div className="card">
          <div className="favorite">
            <Heart></Heart>
          </div>
          <div className="image">
            <img src={product.url} alt="" />
          </div>
          <div className="content">
            <p className="rate">&#x20B9; {product.price}</p>
            <span className="kilometer">{product.category}</span>
            <p className="name"> {product.name}</p>
          </div>
          <div className="date">
            <span>{product.createdAt}</span>
          </div>
        </div>
       }) }

      </div>
        </Col>
      </Row>
      </Container>}
     
    </div>
    </Container>
  );
}

export default Posts;
