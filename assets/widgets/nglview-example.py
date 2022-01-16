import pytraj as pt
import nglview as nv

traj = pt.load('sim.nc', top='sim.prmtop')
traj.strip(":TIP3")
view = nv.show_pytraj(traj)
view.clear()
view.add_cartoon('protein', color_scheme='residueindex')
view.add_ball_and_stick('not protein', opacity=0.5)
view
