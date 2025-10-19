import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleySet
 */
export class HaleySet extends VITAL_Node {
  declare public haleySetMemberURIs?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleySet';
  }

  /**
   * Get property definitions for HaleySet
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleySetMemberURIs',
        tsPropertyName: 'haleySetMemberURIs',
        type: 'http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject | http://vital.ai/ontology/vital-core#VITAL_HyperEdge | http://vital.ai/ontology/vital-core#VITAL_Edge | http://vital.ai/ontology/vital-core#VITAL_Node | http://vital.ai/ontology/vital-core#VITAL_HyperNode[]',
        required: false
      }
    ];
  }


}
