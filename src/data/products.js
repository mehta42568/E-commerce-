const products = Array.from({ length: 100 }).map((_, i) => ({
id: String(i + 1),
title: `Product ${i + 1}`,
price: Number((Math.random() * 90 + 10).toFixed(2)),
category: ['Clothing','Electronics','Home','Toys'][i % 4],
image: `https://picsum.photos/seed/p${i+1}/400/400`,
description: `This is a description for Product ${i + 1}. High quality, reliable, and stylish.`
}))


export default products