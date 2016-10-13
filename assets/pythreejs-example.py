from pythreejs import *

f = """
function f(origu,origv) {
    // scale u and v to the ranges I want: [0, 2*pi]
    var u = 2*Math.PI*origu;
    var v = 2*Math.PI*origv;
    
    var x = Math.sin(u);
    var y = Math.cos(v);
    var z = Math.cos(u+v);
    
    return new THREE.Vector3(x,y,z)
}
"""

surf_g = ParametricGeometry(func=f);
surf = Mesh(geometry=surf_g, material=LambertMaterial(color='green', side='FrontSide'))
surf2 = Mesh(geometry=surf_g, material=LambertMaterial(color='yellow', side='BackSide'))
scene = Scene(children=[surf, surf2, AmbientLight(color='#777777')])
c = PerspectiveCamera(position=[2.5, 2.5, 2.5], up=[0, 0, 1],
                      children=[DirectionalLight(color='white',
                                                 position=[3, 5, 1],
                                                 intensity=0.6)])
Renderer(camera=c, scene=scene, controls=[OrbitControls(controlling=c)])
