class Material
{
    #gl = null;
    #program = null;
    
    get gl ()
    {
        return this.#gl;
    }
    
    get program ()
    {
        return this.#program;
    }
    
    constructor (vertexShader, fragmentShader)
    {
        this.#gl = Application.gl;
        
        const vShader = vertexShader ?? Shader.Find("Default/Standard", "VERTEX");
        const fShader = fragmentShader ?? Shader.Find("Default/Standard", "FRAGMENT");
        
        this.#program = this.#gl.createProgram();
        
        this.#gl.attachShader(this.#program, vShader.shader);
        this.#gl.attachShader(this.#program, fShader.shader);
        this.#gl.linkProgram(this.#program);
        
        this.#gl.detachShader(this.#program, vShader.shader);
        this.#gl.detachShader(this.#program, fShader.shader);
    }
    
    getAttribLocation (name)
    {
        return this.#gl.getAttribLocation(this.#program, name);
    }
    
    getUniformLocation (name)
    {
        return this.#gl.getUniformLocation(this.#program, name);
    }
}