import { FilterElement } from './filterElement';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#TrackingPhrase
 */
export class TrackingPhrase extends FilterElement {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-social#TrackingPhrase';
  }

  /**
   * Get property definitions for TrackingPhrase
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
