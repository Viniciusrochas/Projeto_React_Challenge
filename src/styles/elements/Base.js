import { createGlobalStyle } from 'styled-components';

const Base  = createGlobalStyle`
    body {
      
        font-family: 'Open Sans', sans-serif; 
        
        margin-top: 0px;
        margin-left: 0px;
        width: 1280px;
        height: 1216px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        opacity: 1;
        
        display:flex;
    }

    #topo h1{
        margin-top: 42px;
        margin-left: 70px;
        width: 160px;
        height: 65px;
        text-align: center;
        font: normal normal 600 48px/65px Open Sans;
        letter-spacing: 0px;
        color: #363636;
        opacity: 1;
    }
    #topo #filtro{
        margin-left: 745px;
        margin-top: -42px;
        float:left;
    }

    #container{
        
        margin: 44px 0 48px 70px;
        width: 262px;
        height: 230px;
        
        float:left;
    }
    #imagem{
        background: #EEEEEE 0% 0% no-repeat padding-box;
        border-radius: 3px;
        opacity: 1;
        text-align: center;
        padding:25px 41px;
        width:180px;
    }
    h2{
        padding:10px;
        color: #746A6A;
        
    }
    #titulo{
        display:block;
        padding:10px;
        text-align: center;
    }
    
    a{
        
        display:none;
        text-decoration:none;

    }

   
    #titulo:hover a{
        
        background: #EEEEEE;
        display:block;
        
    }
    #container p, a{
        text-align:center;
        color:#3486E6;
        font-size: 16px;
        font-weight:bold;
        font-family: 'Open Sans', sans-serif;
        letter-spacing: 1px;
    }

    #filtro{   
	   
       background: url(arrow-down-icon.svg) no-repeat #FFFFFF;  /* Imagem de fundo (Seta) */   
       background-position: 218px center;     
       width: 250px;   
       height:30px;  
       border:1px solid #E1E1E1;
       text-align: left;
        font: normal 14px;
        letter-spacing: 0px;
        color: #423B3B;
        opacity: 1;
       }
   #carrinho{
        
        margin-left: 1050px;
        width: 262px;
        height: 325px;
        margin-top: -42px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid #E1E1E1;
        opacity: 1;        
   }
   #img{
       
        margin-top: -200px;
        margin-left: 1130px;
        width: 90px;
        height: 72px;
        
        opacity: 1;
        
   }
   #p{
        
        margin-left: 1070px;
        width: 201px;
        height: 38px;
        text-align: center;
        font:  normal 14px ;
        letter-spacing: 0px;
        color: #746A6A;
        opacity: 1;
   }
   #carrinho h2{
        
        font-weight: bold;
        font-size: 18px;
        letter-spacing: 0px;
        color: #363636;
        opacity: 1;
   }
    
`;
export default Base;