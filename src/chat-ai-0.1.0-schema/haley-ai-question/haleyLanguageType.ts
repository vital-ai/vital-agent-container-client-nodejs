import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyLanguageType
 */
export class HaleyLanguageType extends VITAL_Node {
  public languageName?: string;
  public languageIdentifier?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyLanguageType';
  }

  /**
   * Get property definitions for HaleyLanguageType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasLanguageName',
        tsPropertyName: 'languageName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasLanguageIdentifier',
        tsPropertyName: 'languageIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
