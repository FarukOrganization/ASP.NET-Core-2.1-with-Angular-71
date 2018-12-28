using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ASP.NET_Core_2._1_with_Angular_71.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        dynamic[] products= new[]
            {
                new {
                    id=1,
                    code ="Comp-001",
                    product = "Computer",
                    available = "true",
                    price = "35.5",
                    rating ="3",
                    imageUrl = "https://openclipart.org/download/265342/COMPUTADOR.svg"
                },
                new {
                    id=2,
                    code ="Lap-002",
                    product = "Laptop",
                    available = "true",
                    price = "55.5",
                    rating = "3.5",
                    imageUrl = "https://openclipart.org/download/204064/Happy-Computer.svg",
                },
                new {
                    id=3,
                    code ="Tab-003",
                    product = "Tablet",
                    available = "true",
                    price = "50.5",
                    rating = "4.5",
                    imageUrl = "https://openclipart.org/download/178889/1370290172.svg",
                },
                new {
                    id=4,
                    code ="Note-004",
                    product = "Notepad",
                    available = "true",
                    price = "53.5",
                    rating = "5",
                    imageUrl = "https://openclipart.org/download/289454/notepad-and-pen.svg",
                }
            };

        [Route("{id}")]
        public IActionResult GetProduct(int id)
        {
            return Ok(products.Where(prod=> prod.id==id).FirstOrDefault());
        }
        public IActionResult GetProducts()
        {
            return Ok(products);
        }
    }
}