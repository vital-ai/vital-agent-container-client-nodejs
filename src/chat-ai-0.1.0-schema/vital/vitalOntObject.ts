import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#VitalOntObject
 */
export class VitalOntObject extends VITAL_Node {
  public vitalOntObjectDefinition?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#VitalOntObject';
  }

  /**
   * Get property definitions for VitalOntObject
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasVitalOntObjectDefinition',
        tsPropertyName: 'vitalOntObjectDefinition',
        type: 'string',
        required: false
      }
    ];
  }


}
