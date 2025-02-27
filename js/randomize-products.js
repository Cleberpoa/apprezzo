 document.addEventListener('DOMContentLoaded', (event) => {
            const container = document.getElementById('productContainer');
            const products = Array.from(container.getElementsByClassName('single-products-catagory'));
            
            // Shuffle the products array
            for (let i = products.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [products[i], products[j]] = [products[j], products[i]];
            }
            
            // Clear the container
            container.innerHTML = '';
            
            // Append shuffled products back to the container
            products.forEach(product => container.appendChild(product));
        });