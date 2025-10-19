import { VITAL_HyperNode } from '../vital-core/vitalHypernode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#BaseInteractionTransaction
 */
export class BaseInteractionTransaction extends VITAL_HyperNode {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#BaseInteractionTransaction';
  }

  /**
   * Get property definitions for BaseInteractionTransaction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
