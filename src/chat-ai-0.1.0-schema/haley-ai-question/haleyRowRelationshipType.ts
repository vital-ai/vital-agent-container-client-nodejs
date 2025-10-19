import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyRowRelationshipType
 */
export class HaleyRowRelationshipType extends VITAL_Node {
  public description?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyRowRelationshipType';
  }

  /**
   * Get property definitions for HaleyRowRelationshipType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDescription',
        tsPropertyName: 'description',
        type: 'string',
        required: false
      }
    ];
  }


}
