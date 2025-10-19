import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyGraph
 */
export class HaleyGraph extends VITAL_Node {
  public graphTypeURI?: string;
  declare public memberURIs?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyGraph';
  }

  /**
   * Get property definitions for HaleyGraph
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasGraphTypeURI',
        tsPropertyName: 'graphTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasMemberURIs',
        tsPropertyName: 'memberURIs',
        type: 'http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject | http://vital.ai/ontology/vital-core#VITAL_HyperEdge | http://vital.ai/ontology/vital-core#VITAL_Edge | http://vital.ai/ontology/vital-core#VITAL_Node | http://vital.ai/ontology/vital-core#VITAL_HyperNode[]',
        required: false
      }
    ];
  }


}
