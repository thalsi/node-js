let users = [];

exports.createUser=(req, res)=>{
    const user=req.body;
    users.push(user);

    res.status(201).json({
        success: true,
        message:"User created",
        data:user
    });
}

exports.getAllUsers=(req, res)=>{
    res.status(200).json({
        success: true,
        data: users
    });
}