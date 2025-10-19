import { Card } from './card';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#VideoObject
 */
export class VideoObject extends Card {
  public url?: string;
  public downloadEnabled?: boolean;
  public autoPlay?: boolean;
  public synchronize?: boolean;
  public source?: string;
  public durationSeconds?: number;
  public title?: string;
  public playing?: boolean;
  public thumbnailImageFileNodeURI?: string;
  public thumbnailImageURL?: string;
  public progressBarEnabled?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#VideoObject';
  }

  /**
   * Get property definitions for VideoObject
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasUrl',
        tsPropertyName: 'url',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isDownloadEnabled',
        tsPropertyName: 'downloadEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isAutoPlay',
        tsPropertyName: 'autoPlay',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSynchronize',
        tsPropertyName: 'synchronize',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSource',
        tsPropertyName: 'source',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDurationSeconds',
        tsPropertyName: 'durationSeconds',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTitle',
        tsPropertyName: 'title',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isPlaying',
        tsPropertyName: 'playing',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasThumbnailImageFileNodeURI',
        tsPropertyName: 'thumbnailImageFileNodeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasThumbnailImageURL',
        tsPropertyName: 'thumbnailImageURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isProgressBarEnabled',
        tsPropertyName: 'progressBarEnabled',
        type: 'boolean',
        required: false
      }
    ];
  }


}
