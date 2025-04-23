import React from 'react';
import './style.css'; // Import your CSS file

const Cover = () => {
  return (
    <div class="container">
        <div class="card_wrapper">
            <div class="card">
                <div class="card-image-with-svg-mask">
                    <p class="text">Chameleons are fascinating reptiles known for their ability to change color, which helps with camouflage, communication, and temperature regulation. Found primarily in Africa and Madagascar, they have unique features like independently rotating eyes and a long, sticky tongue to catch prey. Chameleons symbolize adaptability and are masters of their environments
                    </p>
                </div>
            </div>
            <div class="button top-center"><span class="text">Chameleons</span></div>
            <div class="button bottom-right"><span class="text"><i class="fa-solid fa-quote-left"></i> Be adaptable like a chameleon, but never lose your true colors.<i class="fa-solid fa-quote-right"></i></span></div>
        </div>
    </div>
  );
};

export default Cover;