import bcrypt from 'bcryptjs'

const data = {
    users: [
      {
        name: 'Nguyễn Thành Đạt',
        username:'ntdat',
        password: bcrypt.hashSync('123456'),
        type: 'admin',
        gender: 'male',
        image: '/user/ntdat.jpg',
        description: 'A popular shirt',
      },
      {
        name: 'Lê Phương Nhi',
        username:'lpnhi',
        password:'123456',
        type: 'admin',
        gender: 'female',
        image: '/user/lpnhi.jpg',
        description: 'A popular shirt',
      },
      {
        name: 'Nguyễn Di Đan',
        username:'nddan',
        password:'123456',
        type: 'admin',
        gender: 'girl',
        image: '/user/nddan.jpg',
        description: 'A popular shirt',
      },
      {
        name: 'Tô Thị Hậu Phương',
        username:'tthphuong',
        password:'123456',
        type: 'admin',
        gender: 'girl',
        image: '/user/tthphuong.jpg',
        description: 'A popular shirt',
      },
      {
        name: 'Nông Bảo Khanh',
        username:'nbkhanh',
        password:'123456',
        type: 'admin',
        gender: 'girl',
        image: '/user/nbkhanh.jpg',
        description: 'A popular shirt',
      },
      {
        name: 'Phạm Xuân Lâm',
        username:'pxlam',
        password:'123456',
        type: 'admin',
        gender: 'girl',
        image: '/user/pxlam.jpg',
        description: 'A popular shirt',
      },
      {
        name: 'Lê Trung',
        username:'ltrung',
        password:'123456',
        type: 'admin',
        gender: 'girl',
        image: '/user/ltrung.jpg',
        description: 'A popular shirt',
      },
      {
        name: 'Lê Thị Linh',
        username:'ltlinh',
        password:'123456',
        type: 'admin',
        gender: 'girl',
        image: '/user/ltlinh.jpg',
        description: 'A popular shirt',
      },
      {
        name: 'Lương Ngọc Đức',
        username:'lnduc',
        password:'123456',
        type: 'admin',
        gender: 'girl',
        image: '/user/lnduc.jpg',
        description: 'A popular shirt',
      },
      {
        name: 'Nguyễn Trần Nhật Anh',
        username:'ntnanh',
        password:'123456',
        type: 'admin',
        gender: 'girl',
        image: '/user/ntnanh.jpg',
        description: 'A popular shirt',
      },
      {
        name: 'Nguyễn Trang',
        username:'ntrang',
        password:'123456',
        type: 'admin',
        gender: 'girl',
        image: '/user/ntrang.jpg',
        description: 'A popular shirt',
      },
      {
        name: 'Vũ Hưng',
        username:'vhung',
        password:'123456',
        type: 'admin',
        gender: 'girl',
        image: '/user/vhung.jpg',
        description: 'A popular shirt',
      },
    ],
  };
  
  export default data;