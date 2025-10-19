import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindOperationResult
 */
export class HaleyMindOperationResult extends VITAL_Node {
  public haleyMindOperationURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindOperationResult';
  }

  /**
   * Get property definitions for HaleyMindOperationResult
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindOperationURI',
        tsPropertyName: 'haleyMindOperationURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
