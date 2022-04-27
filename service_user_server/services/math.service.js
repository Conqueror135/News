module.exports = {
    name: "math",
    settings:{
        rest: "math/",
    },
    actions:{
        cal:{
            rest: "POST /cal",
            params:{
                parameter:{type: "object"}
            },
            async handler(ctx){
                let p = ctx.params.parameter;
                if(p.type==="add")
                    return Number(p.a)+Number(p.b);
                if(p.type==="sub")
                    return Number(p.a)-Number(p.b);
                if(p.type==="mul")
                    return Number(p.a)*Number(p.b);
                if(p.type==="div")
                    if(Number(p.b)!=0)
                        return Number(p.a)/Number(p.b);
                    else
                        return "Math Error! Division by 0!";
            }
        },
        say:{
            rest: "GET /hi",
            async handler(ctx){
                return "Thang Than Thanh";
            }
        }

    }
}