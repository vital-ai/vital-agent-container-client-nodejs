import { PropertyFact } from './propertyFact';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#URIPropertyFact
 */
export class URIPropertyFact extends PropertyFact {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#URIPropertyFact';
  }

  /**
   * Get property definitions for URIPropertyFact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
