function BlankEngine ()
{
    ThrowError(1);
}

class Vector2
{
    constructor (x, y)
    {
        this.x = x ?? 0.0;
        this.y = y ?? 0.0;
    }
    
    Set (x, y)
    {
        if (x == null || y == null) return ThrowError(0);
        
        this.x = x;
        this.y = y;
    }
    
    static zero ()
    {
        return new Vector2(0, 0);
    }
    
    static one ()
    {
        return new Vector2(1, 1);
    }
    
    static up ()
    {
        return new Vector2(0, 1);
    }
    
    static down ()
    {
        return new Vector2(0, -1);
    }
    
    static left ()
    {
        return new Vector2(-1, 0);
    }
    
    static right ()
    {
        return new Vector2(1, 0);
    }
    
    get magnitude ()
    {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    
    get sqrMagnitude ()
    {
        return (this.x * this.x + this.y * this.y);
    }
    
    get normalized ()
    {
        return new Vector2(this.x / this.magnitude || 0.0, this.y / this.magnitude || 0.0);
    }
    
    ToString ()
    {
        return `${this.x}, ${this.y}`;
    }
    
    Equals (other)
    {
        return this.x == other.x && this.y == other.y;
    }
    
    Normalize ()
    {
        let magnitude = this.magnitude;
        
        this.x = this.x / magnitude;
        this.y = this.y / magnitude;
    }
    
    static Distance (a, b)
    {
        let x = a.x - b.x;
        let y = a.y - b.y;
        
        return Math.sqrt(x * x + y * y);
    }
    
    static Dot (lhs, rhs)
    {
        return (lhs.x * rhs.x + lhs.y * rhs.y)
    }
    
    static Min (lhs, rhs)
    {
        return new Vector2(Math.min(lhs.x, rhs.x), Math.min(lhs.y, rhs.y));
    }
    
    static Max (lhs, rhs)
    {
        return new Vector2(Math.max(lhs.x, rhs.x), Math.max(lhs.y, rhs.y));
    }
}

class Color
{
    constructor (r, g, b, a)
    {
        this.r = r ?? 0.0;
        this.g = g ?? 0.0;
        this.b = b ?? 0.0;
        this.a = a ?? 1.0;
    }
    
    get grayscale ()
    {
        let value = (this.r * 0.3 + this.g * 0.59 + this.b * 0.11);
        
        return new Color(value, value, value, this.a);
    }
    
    ToString ()
    {
        return `${this.r}, ${this.g}, ${this.b}, ${this.a}`;
    }
}