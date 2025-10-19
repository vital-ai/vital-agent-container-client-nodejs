import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyCloud
 */
export class HaleyCloud extends VITAL_Node {
  public cloudIdentifier?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyCloud';
  }

  /**
   * Get property definitions for HaleyCloud
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCloudIdentifier',
        tsPropertyName: 'cloudIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
