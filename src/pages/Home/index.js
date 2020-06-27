import React from 'react';
import{Button} from 'antd-mobile';
class Home extends React.Component{
     render(){
          return(
               <div> 这是home组件
                   <Button type="primary"  loading>按钮</Button>
               </div>
          )
     }
}

export default Home;