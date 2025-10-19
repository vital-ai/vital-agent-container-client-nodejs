import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#VerbPhrase
 */
export class VerbPhrase extends VITAL_Node {
  public startTokenIndex?: number;
  public endTokenIndex?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#VerbPhrase';
  }

  /**
   * Get property definitions for VerbPhrase
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasStartTokenIndex',
        tsPropertyName: 'startTokenIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasEndTokenIndex',
        tsPropertyName: 'endTokenIndex',
        type: 'number',
        required: false
      }
    ];
  }


}
