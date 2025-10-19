import { KGType } from './kgtype';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGRelationType
 */
export class KGRelationType extends KGType {
  public kGRelationTypeSymmetric?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGRelationType';
  }

  /**
   * Get property definitions for KGRelationType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#isKGRelationTypeSymmetric',
        tsPropertyName: 'kGRelationTypeSymmetric',
        type: 'boolean',
        required: false
      }
    ];
  }


}
