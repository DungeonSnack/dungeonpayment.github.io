const ctx = document.getElementById('salesChart').getContext('2d');
      const salesChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: Array.from({length: 60}, (_, i) => (i + 1) * 1000),
          datasets: [{
            label: 'Sales',
            data: [20, 30, 45, 25, 50, 40, 55, 35, 60, 70, 65, 55, 50, 45, 55, 35, 25, 60, 45, 40, 30, 20, 45, 55, 50, 45, 60, 55, 50, 45, 40, 30, 20, 45, 60, 55, 50, 45, 35, 40, 50, 60, 55, 45, 40, 35, 50, 45, 40, 55, 60, 55, 45, 50, 55, 60, 50, 40, 35, 30],
            borderColor: '#007bff',
            fill: true,
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
            tension: 0.4
          }]
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Time'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Sales (%)'
              },
              min: 0,
              max: 100
            }
          }
        }
      });

      document.getElementById('addProductForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const productName = document.getElementById('productName').value;
        const category = document.getElementById('category').value;
        const price = document.getElementById('price').value;
        const piece = document.getElementById('piece').value;
        const colors = document.getElementById('availableColor').value.split(',').map(color => color.trim());
        const imageUrl = document.getElementById('productImage').value;

        // Add a new row to the table (in real app, save to the database)
        const tableBody = document.querySelector('table tbody');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${imageUrl}" alt="${productName}" class="product-image"></td>
            <td>${productName}</td>
            <td>${category}</td>
            <td>$${parseFloat(price).toFixed(2)}</td>
            <td>${piece}</td>
            <td>${colors.map(color => `<span class="available-color" style="background-color: ${color};"></span>`).join(' ')}</td>
            <td class="action-icons">
                <i class="bi bi-pencil-square"></i>
                <i class="bi bi-trash"></i>
            </td>
        `;
        tableBody.appendChild(row);

        // Clear the form and close the modal
        event.target.reset();
        const addProductModal = bootstrap.Modal.getInstance(document.getElementById('addProductModal'));
        addProductModal.hide();
    });