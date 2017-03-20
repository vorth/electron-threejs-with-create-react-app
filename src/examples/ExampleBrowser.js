import React from 'react';
import { Link } from 'react-router';
import ExampleViewer from './ExampleViewer';

import SimpleExample from './Simple/index';
import ManualRenderingExample from './ManualRendering/index';
import CameraExample from './WebGLCameraExample/index';
import GeometryShapesExample from './GeometryShapes/index';
import DraggableCubes from './DraggableCubes/index';

const examples = [
  {
    name: 'Simple',
    component: SimpleExample,
    url: 'Simple/index',
    slug: 'webgl_simple',
  },
  {
    name: 'Camera',
    component: CameraExample,
    url: 'WebGLCameraExample/index',
    slug: 'webgl_camera',
  },
  {
    name: 'Geometry Shapes',
    component: GeometryShapesExample,
    url: 'GeometryShapes/index',
    slug: 'webgl_geometry_shapes',
  },
  {
    name: 'Draggable Cubes',
    component: DraggableCubes,
    url: 'DraggableCubes/index',
    slug: 'webgl_draggable_cubes',
  },
  {
    separator: true,
    name: 'Advanced',
  },
  {
    name: 'Manual rendering',
    component: ManualRenderingExample,
    url: 'ManualRendering/index',
    slug: 'advanced_manual_rendering',
  },
];

const ExampleBrowser = ({ params }) => {
  const activeExample = params.slug && examples.find(example => example.slug === params.slug);
  return (
    <div>
      <div id="panel" className="collapsed">
        <h1><a href="https://github.com/toxicFork/react-three-renderer/">react-three-renderer</a> / examples</h1>
        <div id="content">
          <div>
            <h2>webgl</h2>
            {examples.map((example, index) => {
              if (example.separator) {
                return (<h2 key={index}>{example.name}</h2>);
              }

              if (example.advanced) {
                return (<div key={index}>
                  <a href={example.page} target="blank">{example.name}</a> (new tab)
                </div>);
              }

              return (<Link
                to={`/${example.slug}`}
                key={index}
                className="link"
                activeClassName="selected"
              >
                {example.name}
              </Link>);
            })}
          </div>
        </div>
      </div>
      <ExampleViewer example={activeExample} />
    </div>
  );
};

ExampleBrowser.propTypes = {
  params: React.PropTypes.object.isRequired,
};

export default ExampleBrowser;
