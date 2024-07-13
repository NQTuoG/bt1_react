import React from 'react'

const Banner = () => {
  const showAlert = () => {
    alert('Bạn rất đẹp trai !');
  } 
  return (
    <div>
      <div className='container px-40'>
        <div className=' my-5 rounded-xl border border-solid px-7 py-8'>
          <h1 className='text-4xl font-bold py-3'>Hello anh Đông</h1>
          <h2>Em tự dựng layout không có dùng bootstrap nên nó hơi xấu, hahahahahahahaha hahahahahah hahahahahah hahahahahahahaha hahahahahah hahahahahah hahahahahahahaha hahahahahah hahahahahah hahahahahahahaha hahahahahah hahahahahah </h2>
          <button onClick={showAlert} className='bg-blue-800 text-white flex items-center my-10 py-2 px-5 rounded-lg border space-x-3 border-black '>Nút này để ấn</button>
        </div>
      </div>
      
    </div>
  )
}

export default Banner
