import { Card } from './card';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Translation
 */
export class Translation extends Card {
  public targetText?: string;
  public sourceLanguage?: string;
  public sourceText?: string;
  public targetLanguage?: string;
  public sourcePronounciation?: string;
  public targetPronounciation?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Translation';
  }

  /**
   * Get property definitions for Translation
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTargetText',
        tsPropertyName: 'targetText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceLanguage',
        tsPropertyName: 'sourceLanguage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceText',
        tsPropertyName: 'sourceText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTargetLanguage',
        tsPropertyName: 'targetLanguage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourcePronounciation',
        tsPropertyName: 'sourcePronounciation',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTargetPronounciation',
        tsPropertyName: 'targetPronounciation',
        type: 'string',
        required: false
      }
    ];
  }


}
