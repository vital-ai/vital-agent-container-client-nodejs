import { VITAL_HyperNode } from '../vital-core/vitalHypernode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#VITAL_Fact
 */
export class VITAL_Fact extends VITAL_HyperNode {
  public factEnabled?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#VITAL_Fact';
  }

  /**
   * Get property definitions for VITAL_Fact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#isFactEnabled',
        tsPropertyName: 'factEnabled',
        type: 'boolean',
        required: false
      }
    ];
  }


}
